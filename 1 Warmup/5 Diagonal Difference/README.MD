#### Given a square matrix of size *N X N*, calculate the absolute difference between the sums of its diagonals.

##### Input Format

The first line contains a single integer, *N*. The next *N* lines denote the matrix's rows, with each line containing space-separated integers describing the columns.

##### Output Format

Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

##### Sample Input
3

|R\C| C<sub>1</sub>| C<sub>2</sub>|C<sub>3</sub>|
|----|-----|-----|----|
|R<sub>1</sub>|  11 |    2|   4|
|R<sub>2</sub>|   4 |    5|   6|
|R<sub>3</sub>|  10 |    8| -12|

##### Sample Output

15

##### Explanation

*The primary diagonal is:*

|R\C| C<sub>1</sub>| C<sub>2</sub>|C<sub>3</sub>|
|----|-----|-----|----|
|R<sub>1</sub>|  11 |     |    |
|R<sub>2</sub>|     |    5|    |
|R<sub>3</sub>|     |     | -12|

Sum across the primary diagonal: 11 + 5 - 12 = 4

*The secondary diagonal is:*

|R\C| C<sub>1</sub>| C<sub>2</sub>|C<sub>3</sub>|
|----|-----|-----|----|
|R<sub>1</sub>|     |     |   4|
|R<sub>2</sub>|     |    5|    |
|R<sub>3</sub>|  10 |     |    |

Sum across the secondary diagonal: 4 + 5 + 10 = 19

Difference: | 4 - 19 | = 15
