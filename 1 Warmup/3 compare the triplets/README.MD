##### Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.


##### We define the rating for Alice's challenge to be the triplet **_A = [a0, a1, a2]_**, and the rating for Bob's challenge to be the triplet **_B = [b0, b1, b2]_**.
#
##### Your task is to find their comparison points by comparing  *a0 with a1, b0 with b1, and  a2 with b2*.
1. *If , then Alice is awarded  point*.
2. If , then Bob is awarded  point.
3. If , then neither person receives a point.
*Comparison points is the total points a person earned.*
##### Given A and B, can you compare the two challenges and print their respective comparison points?
-----
##### Input Format

The first line contains  space-separated integers, a0, a1, and a2, describing the respective values in triplet.
The second line contains  space-separated integers, b0, b1, and b2, describing the respective values in triplet.

Constraints
* 1<= a~i~ <= 100
* 1 <= b~i~ <= 100

Output Format

Print two space-separated integers denoting the respective comparison points earned by Alice and Bob.

Sample Input

**5 6 7
3 6 10**
Sample Output

**1 1**
Explanation

In this example:
* A = (a~0~, a~1~, a~2~) = (5, 6, 7)
* B = (b~0~, b~1~, b~2~) = (3, 6, 10)
Now, let's compare each individual score:

 **a~i~ < b~i~, so Alice receives  point.
a~i~ = b~i~, so nobody receives a point.
a~i~ > b~i~, so Bob receives  point.
Alice's comparison score is , and Bob's comparison score is . Thus, we print 1 1 (Alice's comparison score followed by Bob's comparison score) on a single line.**
