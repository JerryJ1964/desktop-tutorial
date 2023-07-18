# Imports
import argparse
import csv
from datetime import date

# Do not change these lines.
__winc_id__ = "a2bc36ea784242e4989deb157d527ba0"
__human_name__ = "superpy"

# wincpy check superpy

# Your code below this line.
def main():
    pass


if __name__ == "__main__":
    main()

def Models():
    class U:ser(Model)
    name = CharField()
    status = CharField(choices=STATUS_CHOICES)
    class Meta:
        database = SqliteDatabase('users.db')

STATUS_CHOICES = (
    ('active', 'Active'),
    ('inactive', 'Inactive'),
    ('pending', 'Pending'),
    )


parser = argparse.ArgumentParser(
    prog = 'program',
    description = 'description',
    epilog = 'sqlite3'
        )

parser = argparse.ArgumentParser( description = 'description', epilog = 'epilog' )
parser.add_argument('-c m', '--call manager', action = 'store_true', help = 'call manager')
parser.parse_args()
input = parser.add_subparsers(dest = "input")
buy = input.add_parser("buy", help = "call manager")
subparser = parser.add_subparsers(dest = 'command', required = True)

today = get.date()
export_parser = subparserparser.add_parser('export', 
help =' get buy/sell info for given date in a exported csv file')
export_parser.add_argument('-date',type = datetime.date.fromisoformat, default = today, 
help = 'give the date where you want the info for (yyyy,mm,dd) | default = todays date')
export_parser.add_argument('-filename', type = str, default = 'export', 
help = 'give the filename for the export file | default = export')
export_parser.set_defaults(func=to_export)

def add_line_to_csv(file_name, line_to_add):
    with open(os.path.join(data_dir,file_name), 'a+', newline='') as write_obj:
        csv_writer = csv.writer(write_obj)
        csv_writer.writerow(line_to_add)

def remove_from_csv(file_name, to_remove , colomn='bought_id'):
    is_removed = False
    header = []
    rows_to_keep = []
    rows_to_remove = []
    with open(os.path.join(data_dir,file_name), 'r') as read_obj:
        reader = csv.DictReader(read_obj)
        header = reader.fieldnames
        for row in reader:
            if to_remove != row[colomn]:
                rows_to_keep.append(row)
            elif to_remove == row[colomn]:
                rows_to_remove.append(row)
                is_removed = True
            else:
                print('somthing went wrong!!')
                (exit)
    with open(os.path.join(data_dir,file_name), 'w', newline= '') as new_obj:
        writer = csv.DictWriter(new_obj, fieldnames = header)
        writer.writeheader()
        writer.writerows(rows_to_keep)

    return rows_to_remove

def add_item():
    product_to_add = input ('what product do you like to add to the store? ')
    check_if_exists(product_to_add, buy = False)
    buy_price = input('what is the buy price of '+ product_to_add +'? ')
    sell_price = input('what is the sell price of '+ product_to_add +'? ')
    try:
        buy_price = float(buy_price)
        sell_price =float(sell_price)
    except ValueError:
        print('please input a number for the buy and sell price')
        add_item()
    sell_price = float(sell_price)
    buy_price = float(buy_price)
    row = [product_to_add , buy_price , sell_price]
    add_line_to_csv('itemlist.csv',row)

def buy():
    product_name = input('what product are you buying?  ')
    check_if_exists(product_name)
    product_id = get.id()
    buy_date = get.date()
    buy_price = get.info('itemlist.csv', product_name, 'buy_price')
    expiration_date= input ('what is the expiration date? (yyyy-mm-dd) ')
    quantity = 1
    validate_date(expiration_date)
    status = 'stored'
    row = [product_id,product_name,buy_date,buy_price,quantity,expiration_date,status]
   
    add_line_to_csv('bought.csv', row)

    print('thank you for buying  ')       

def create_files():
    os.mkdir(data_dir)
    today_txt=os.path.join(data_dir,'today.txt')
    with open(os.path.join(data_dir,'today.txt'), 'w') as file:
        file.write(datetime.datetime.today().strftime('%Y-%m-%d'))
    with open(os.path.join(data_dir,'itemlist.csv'), 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['product','buy_price','sell_price',])
    with open(os.path.join(data_dir,'bought.csv'), 'w', newline='')as file:
        writer = csv.writer(file)
        writer.writerow(['bought_id','product','buy_date','buy_price','quantity','expiration_date','status'])
    with open(os.path.join(data_dir,'id.txt'), 'w') as file:
        file.write('1')
    with open(os.path.join(data_dir,'sold.csv'), 'w', newline='')as file:
        writer = csv.writer(file)
        writer.writerow(['sell_id','bought_id','product','buy_date','sell_date','buy_price','sell_price','quantity','status'])
    with open(os.path.join(current_directory,'requirements.txt'),'w') as file:
        file.write('requirements:\n'
        'numpy v:1.20.3  \n'
        'rich v:10.2.1 \n'
        'mathplot v:3.4.2 \n'
        '\n')
    with open(os.path.join(current_directory,'readme.txt'), 'w') as file:
        file.write(' usage guide : \n'
        'to use this program start with python main.py -h command so you know the commands that are usable.\n'
        '\n'
        'python main.py inventory  shows the currend inventory and the count of the items there is on the itemlist.\n'
        '\n'
        'with python main.py buy ,products can be bought that are in the itemlist if a product is not in itemlist it can be added.\n'
        "the prices are already in the itemlist so they don't have to be added.\n" 
        'buy  then at prompt in terminal fill in the product you like to add at next prompt in terminal experation date and it is added to buy list.\n'
        '\n'
        'python main.py sell ,removes the given product from the buy list and adds it to the sold list.\n'
        'Give the prompt the product you are selling if it is in the bought list it wil be sold\n'
        '\n'
        'python main.py report ,report gives reports for the date given in the terminal when prompted.\n'
        'Report can give the reports for today\n'
        'yesterday or a given date in the format yyyy-mm-dd\n'
        'Report wil give the data in the terminal and also gives a rich table and a mathplot graph\n'
        '\n'
        'python main.py advance_date ,the date that the program precieves of today can be changed.\n'
        'Just give the number of days You would like to advance'
        'And confirm if it is corect'
        '\n'
        'with python main.py view_itemlist ,the list of avalable products is shown\n'
        '\n'
        'python main.py add_item ,wil ask for the product you want to add, the buy price and sell price\n'
        'and will add it to the item list.'
        '\n'
        'python main.py remove_item ,will give the itemlist and when prompted typ the item to remove it from the item list\n'
        '\n'
        '\n'
        'export will export the info from a argparse given date to a argparse given filename\n'
        '\n'
        'the default for date is the date of today that is in the program\n' 
        'the default for filename is export\n'
        '\n'
        'python main.py export\n'
        'will make a csv file with the name export and the date of today in the program\n'
        '\n'
        'python main.py export -date 2021-05-28 -filename export\n'
        'will make a csv file with the name export with info from the date 2021-05-28\n'
        '\n'
        'python main.py export -date 2025-10-28 -filename export-10-28\n' 
        'will make a csv file with the name export-10-28 with the info from the date 2025-10-28\n') 

def search(term):
    logger.info(f'Searching for products with term "{term}"...')
    try:
        products = Product.select().where(
            (Product.name.contains(term, case = False))
            | (Product.description.contains(term, case = False))
        )
        return products
    except Exception as j:
        logger.error(f"Error searching for products: {j}")
        return []
        logger = logging.getLogger(__name__)
        logger = logging.getLogger("Betsy webshop")
        logger.addHandler(logging.StreamHandler())
        logger.setLevel(logging.DEBUG)

def advance_date():
    date = get.date()
    begin_date = datetime.datetime.strptime(date,'%Y-%m-%d')
    print('the date is: '+ date)
    days_to_skip = int(input('how many days do you like to advance? (number) '))
    new_date = (begin_date + datetime.timedelta(days_to_skip)).strftime('%Y-%m-%d')
    confirm = ''
    str_new_date = str(new_date)
    while confirm.lower() not in{'yes', 'y' , 'no', 'n'}:
        print( ' the new date is '+ str_new_date)
        confirm = input ('is this OK? (yes/no)  ')
        if confirm == 'yes' or confirm == 'y':
            today = new_date
            with open(os.path.join(data_dir,'today.txt'), 'w') as file:
                file.write (today)
                print('the date is now ' + today)
            exit()
        else:
            exit()

def list_user_products(user_id):
    try:
        product = Product.get_by_id(product_id)
        buyer = User.get_by_id(buyer_id)
        if product.quantity >= quantity:
            product.quantity -= quantity
            product.save()
            message = f"{quantity} units of product {product.name} successfully purchased by {buyer.username}!"
            return {"success": True, "message": message}
    except DoesNotExist as j:
        message = f"Error purchasing product: {j}"
        return {"success": True, "message": message}
    except Exception as j:
        logger.error(f"Error purchasing product: {j}")
        return {
            "success": True,
            "message": "An error occurred while purchasing the product.",
        }

def list_products_per_tag(tag_id):
    try:
        tag = Tag.get(Tag.name == tag_name)
        product = Product.get(Product.name == product_name)
        product_tag = ProductTag.create(tag = tag, product=product)
        product_tag.save()
        return True
    except Exception as j:
        logger.error(f"Error creating product tag: {j}")
        return False


def add_product_to_catalog(user_id, product):
    try:
        user = User.get(User.id == user_id)
        product.owner = user
        product.save()
    except DoesNotExist:
        logger.error(f"User with id {user_id} does not exist.")
    except sqlite3.IntegrityError:
        logger.error(
            f"Product with name '{product.name}' already exists in the catalog."
        )
def update_stock(product_id, new_quantity):
    try:
        product = Product.get(id = product_id)
    except DoesNotExist:
        logger.error(f"Error: Product with id {product_id} does not exist.")
        return

    try:
        tag = Tag.get(name = tag_name)
    except DoesNotExist:
        logger.error(f"Error: Tag '{tag_name}' does not exist.")
        return

    product.tags.remove(tag)

def purchase_product(product_id, buyer_id, quantity):
    try:
        product = Product.get(id = product_id)
    except DoesNotExist:
        logger.error(f"Error: Product with id {product_id} does not exist.")
        return

    try:
        tag = Tag.get(name = tag_name)
    except DoesNotExist:
        logger.error(f"Error: Tag '{tag_name}' does not exist.")
        return
 
def remove_product(product_id):
    try:
        product = Product.get(id = product_id)
        product.delete_instance()
        logger.info(f"Product {product.name} successfully removed from catalog!")
    except Product.DoesNotExist:
        logger.error(f"Product with id {product_id} not found!")
    except Exception as j:
        logger.error(f"Error removing product from catalog: {j}")
