def deaf_grandma():
    print("HEY KID!")
    counter=0
    while counter <2:
        kid_statement=input()
        if kid_statement=="":
            print("WHAT?!")
        elif kid_statement != kid_statement.upper():
            print("SPEAK UP, KID!")
        elif kid_statement == kid_statement.upper() and kid_statement!= "GOODBYE!":
            print("NO, NOT SINCE 1946!")
        elif kid_statement == "GOODBYE!" and counter <1:
            print("LEAVING SO SOON?")
            counter+=1
        else:
            print("LATER, SKATER!")
            counter+=1


deaf_grandma()
