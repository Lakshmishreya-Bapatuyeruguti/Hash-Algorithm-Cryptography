# Hash-Algorithm-Cryptography
### Done By- Lakshmishreya Bapatuyeruguti  Blockchain Trainee - 2023

- Implemented Sha 1 Algorithm in java script 
- Message of any length then sha 1 produces fixed resultant hash of 160 bits 
- Has 4 rounds each having 20 iterations in total 80 iterations
-SHA-1 requires 80 processing functions:
f(t;B,C,D) = (B AND C) OR ((NOT B) AND D) ( 0 <= t <= 19)<br>
f(t;B,C,D) = B XOR C XOR D (20 <= t <= 39)<br>
f(t;B,C,D) = (B AND C) OR (B AND D) OR (C AND D) (40 <= t <= 59)<br>
f(t;B,C,D) = B XOR C XOR D (60 <= t <= 79)<br>

- SHA-1 requires 80 processing constants:

K(t) = 0x5A827999 ( 0 <= t <= 19)<br>
K(t) = 0x6ED9EBA1 (20 <= t <= 39)<br>
K(t) = 0x8F1BBCDC (40 <= t <= 59)<br>
K(t) = 0xCA62C1D6 (60 <= t <= 79)<br>
- The following buffer variables are used by SHA-1:

a = 0x67452301<br>
b = 0xEFCDAB89<br>
c = 0x98BADCFE<br>
d = 0x10325476\
e = 0xC3D2E1F0
- RESULTS
![Screenshot from 2023-02-22 10-06-16](https://user-images.githubusercontent.com/122250979/220523136-e409a969-fb84-488f-803c-8f0725fb4d1f.png)
