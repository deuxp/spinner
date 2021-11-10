let delay = 0;
const frame = ['\r|  ', '\r/  ', '\r-  ', '\r\\  '];
for (let i = 0; i < 24; i++) {
  setTimeout(() => {
    process.stdout.write(frame[i % frame.length]);
  }, delay);
  delay += 200;
}