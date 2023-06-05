def grandmas_reply(user_input, goodbye_counter):
    if user_input == "":
        return "WHAT!?"
    elif user_input != user_input.upper():
        return "SPEAK UP, KID"
    elif user_input == user_input.upper() and user_input != "GOODBYE!":
        return "NO, NOT SINCE 1946"
    elif user_input == "GOODBYE!" and goodbye_counter == 0:
        return "LEAVING SO SOON?"
    elif user_input == "GOODBYE!" and goodbye_counter == 1:
        return "LATER, SKATER"

def talk_to_grandma():

    # Define variables
    goodbye_counter = 0
    print("HEY KID!")

    # Loop to determine grandma's response
    while goodbye_counter < 2:
        user_input = input()
        output = grandmas_reply(user_input, goodbye_counter)
        if output == "LEAVING SO SOON?" or output ==  "LATER, SKATER":
            goodbye_counter += 1
        print(output)

talk_to_grandma()