#!/bin/bash
/opt/cheerp/bin/clang++ -target cheerp -g src/*.cc src/cutscene/*.cc -o Cane.js -nostdlib -cheerp-sourcemap=Cane.js.map
