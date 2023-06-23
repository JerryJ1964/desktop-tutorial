# Do not modify these lines
__winc_id__ = '71dd124b4a6e4d268f5973db521394ee'
__human_name__ = 'strings'

# Add your code after this line

# wincpy check strings

# Part 1
# UEFA Euro 1988 Final

player_1 = 'Ruud Gullit'
player_2 = 'Marco van Basten'

goal_0 = 32
goal_1 = 54
scorers = f'{player_1} {goal_0}, {player_2} {goal_1}'
print(scorers)

scored = goal_0 + goal_1
report = f'{player_1} scored in the {goal_0}nd minute\n{player_2} scored in the {goal_1}th minute'
print(report)

player_1 ='Ruud Gullit'
spatie = player_1.find(' ')
first_name = player_1[0:spatie]
first_name_len = len(first_name)
spatie = player_1.find(' ')
last_name = player_1[1+spatie:]
last_name_len = len(last_name)
print(player_1)
print(last_name_len)

# Part 2
player = 'Ronald Koeman'
spatie = player.find(' ')
first_name = player[0:spatie]
first_name_len = len(first_name)
spatie = player.find(' ')
last_name = player[1+spatie:]
last_name_len = len(last_name)
print(player)

name_short = player[0]+'. '+(last_name)
print(f"{name_short}")

chant = (first_name + "! ") * (first_name_len-1) + (first_name + "!")
print(f'{chant}')

good_chant = chant[-1] !=" "
print(good_chant)
