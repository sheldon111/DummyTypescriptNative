#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n au.com.miclub.scoringapp/host.exp.exponent.MainActivity
