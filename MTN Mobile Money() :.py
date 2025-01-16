def mainMenu():
    print("MTN Mobile Money")
    print("1) Send Money")
    print("2) Airtime & Bundles")
    print("3) Pay with Momo")
    print("4) Payments")
    print("5) Savings & Loans")
    print("6) Financial Services")
    print("7) Insurance")
    print("8) Account")
    while True:
        try:
            selection=int(input("Enter choice: "))
            if selection==1:
                a()
                break
            elif selection==2:
                b() 
                break
            elif selection==3:
                c()
                break
            elif selection==4:
                d()
                break
            elif selection==5:
                e()
                break
            elif selection==6:
                f()
                break
            elif selection==7:
                g()
                break
            elif selection==8:
                h()
                break
            else:
                print("Invalid choice. Enter 1-8")
                mainMenu()
        except ValueError:
            print("Invalid choice. Enter 1-8")

    exit

def a():
    print("Send Money")
    print("1) Mobile User")
    print("2) Africa")
    print("3) Donations")
    print("0) Back")
    while True:
        try:
            selection=int(input("Enter choice: "))
            if selection==1:
                i()
                break
            elif selection==2:
                j()
                break
            elif selection==3:
                k()
                break
            elif selection==0:
                break
            else:
                print("Invalid choice.")
                mainMenu()
        except ValueError:
            print("Invalid choice.")
    exit

def i():
    print("Enter the number that you are sending to ")
    anykey=input(" ")
    mainMenu()

def j():
    print("Africa")
    print("1) Eastern Africa")
    print("2) Southern Africa")
    print("3) Western Africa")
    print("4) Central Africa")
    print("5) Northern Africa")
    print("0) Back")
    anykey=input(" ")
    mainMenu()

def k():
    print("Rest of the World")
    print("1) Asia")
    print("2) Middle East")
    print("3) Europe")
    print("4) Americans")
    print("0) Back")
    anykey=input(" ")
    mainMenu()

def b():
    print("Airtime & Bundles")
    print("1) Airtime")
    print("2) Voice Bundles")
    print("3) Internet Bundles")
    print("4) Freedom Bundles")
    print("5) Special Bundles")
    print("6) WakaNet")
    print("7) SMS Bundles")
    print("0) Back")
    print("00) Next")
    anykey=input("Enter anything to return to the main menu ")
    mainMenu()

def c():
    print("Please Enter Merchant Code or invoice ID")
    anykey=input(" ")
    mainMenu()

def d():
    print("Payments")
    print("1) Utilities")
    print("2) Pay TV")
    print("3) School Fees")
    print("4) Goods & Services")
    print("5) Fees & Taxes")
    print("6) Lotto & Sports Betting")
    print("7) Music & Video")
    print("0) Back")
    print("00) Next")
    anykey=input(" ")
    mainMenu() 

def e():
    print("Savings & Loans")
    print("1) MoKash")
    print("2) Phone Loans")
    print("3) MoMo Advance")
    print("4) MoPESA")
    print("5) MoSente")
    print("6) XtraCash")
    print("7) Xeno")
    print("0) Back")
    print("00) Next")
    anykey=input(" ")
    mainMenu()

def f():
    print("Financial Services")
    print("1) Send to my Bank Account")
    print("2) Get Money from Bank")
    print("3) SACCO")
    print("4) Pension Schemes")
    print("5) MoMoCard")
    print("6) Uganda Securities Exchange")
    print("0) Back")
    anykey=input(" ")
    mainMenu()

def g():
    print("Insurance")
    print("1) Insurance")
    print("2) Health")
    print("3) Cover By MoMo")
    print("0) Back")
    int=input("Enter {0} to go back ")
    mainMenu()

def h():
    print("Account")
    print("1) Check Balance")
    print("2) Fees Calculator")
    print("3) My Approvals")
    print("4) My Transactions")
    print("5) Change PIN")
    print("6) PIN reset")
    print("7) Initiate Reversal")
    print("0) Back")
    print("00) Next")
    int=input("Enter {0} to go back ")
    mainMenu()
    

    




# main routine
mainMenu()