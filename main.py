# Do not modify these lines
__winc_id__ = '71dd124b4a6e4d268f5973db521394ee'
__human_name__ = 'strings'

# Add your code after this line

# wincpy check strings

# Part 1
# UEFA Euro 1988 Final

player1 = 'Ruud Gullit'
player2 = 'Marco van Basten'

goal_0 = 32
goal_1 = 54
scorers = f'{player1} {goal_0}, {player2} {goal_1}'
print(scorers)

scored = goal_0 + goal_1
report = f'{player1} {"scored in the"} {goal_0}{"nd minute"}\n{player2} {"scored in the"} {goal_1}{"th minute"}'
print(report)

player1 = 'Ruud Gullit'
spatie = player1.find(' ')
first_name = player1[0:spatie]
player1_len = len(first_name)
first_name_len = player1_len
last_name = player1[spatie+0:]
player1 = len(last_name)
last_name_len = spatie+2
print(player1)
print(last_name_len)

player2 = 'Marco van Basten'
print(player2)

# Part 2
player = 'Ruud Gullit'
print(player)

name_short = player[0:1] +'.'+(last_name)
print(f"{name_short}")

chant = (first_name + "! ") * (first_name_len-1) + (first_name + "!")
first_name_len = first_name + "!"
print(f'{chant}')

good_chant = chant[-1] !=""
print(good_chant)
