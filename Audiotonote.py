import numpy as np
from IPython.display import Audio
import librosa
import io
from google.cloud import storage
import os
import math
import cv2 as cv
from matplotlib import pyplot as plt
from google.colab import drive

drive.mount('/content/drive')
file_path = "/content/drive/MyDrive/Colab Notebooks/Guitar Tab/CanoninC.wav"
sample , sampling_rate = librosa.load( file_path , sr = None, mono = True, offset= 0.0, duration = None)
print(len(sample))
print(len(sample)/ sampling_rate)
sample = sample[1000000:3000000]
print(len(sample)/ sampling_rate)

from librosa import display
plt.figure()
librosa.display.waveplot(y = sample, sr = sampling_rate)

import scipy
from scipy.signal import find_peaks as FindPeak

def fft_plot(audio, sampling_rate, start_sec, stop_sec):
  start_frame = sampling_rate * start_sec
  print(start_frame)
  stop_frame = sampling_rate * stop_sec
  print(stop_frame)
  n = int(stop_frame - start_frame)
  T = 1/sampling_rate
  y = scipy.fft(audio[int(start_frame) : int(stop_frame)])
  x = np.linspace(0.0, 1.0/(2.0*T), int(n/2))
  fig, ax = plt.subplots()
  ax.plot(x, 2.0/n * np.abs(y[:n//2]))
  print(x)
  print(n)
  plt.grid()
  plt.xlabel("Frequency (Hz)")
  plt.xlim([0,2000])
  plt.ylabel("Amplitude")
  plt.show()
  peaks, _ = FindPeak(2.0/n * np.abs(y[:n//2]), prominence= 0.03)
  print(peaks)
  return y, x, peaks


y, x, peaks = fft_plot(sample, sampling_rate, 20.00, 20.1)
print(y.shape)
print(x.shape)
print(len(peaks))

for i in range(len(peaks)):
  print(x[peaks[i]])
  print(y[int(x[peaks[i]])])


freq_wave = {}
for second in range(math.floor(10*len(sample)/ sampling_rate)):
  second = second/10
  y, x, peaks = fft_plot(sample, sampling_rate, second, second + 0.1)
  freq_wave[second] = []
  for i in range(len(peaks)):
    print(x[peaks[i]])
    print(y[int(x[peaks[i]])])
    freq_wave[second].append(x[peaks[i]])


print(freq_wave)