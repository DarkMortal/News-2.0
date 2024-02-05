# News Website using PHP and Javascript

## The Template contains the basic template used for creating the electron app and the PHP contains everything including the PHP files 

### In windows:- Paste the PHP Folder inside the htdocs folder of XAMPP <br>
### In Ubuntu:- Paste the PHP Folder inside the /var/www/html folder. <br> Don't forget to update the permissions of all the folders (inclusing the Resource Folder) using the command:-
    sudo chmod -R +rwx "Folder-Name" 

To install tailwindcss globally (in Ubuntu 20.4)

    sudo npm install tailwindcss -g
To compile Tailwind.css:-

    tailwindcss -o Resources/Tailwind.css
To start Apache service:-

    sudo service apache2 start
To install required dependencies:-

    sudo apt install php php-mysql libapache2-mod-php apache2
Query to create database

    Create TABLE SUBSCRIBERS(
        UserName varchar(50) NOT NULL,
        Email varchar(50) PRIMARY KEY NOT NULL,
        Password varchar(20) NOT NULL,
        DOB date NOT NULL,
        Subscription varchar(50) NOT NULL,
        CONSTRAINT NO_OTHER_MEDIA CHECK (Subscription IN (
            'Times of India','The Economic Times','The Telegraph','The New York Times','The Times Network'
        ))
    );
## Screenshots
![News](https://github.com/DarkMortal/News-2.0/assets/67017303/3718f7e2-dbd9-48ac-8a75-0e913219d57a)
![Weather](https://github.com/DarkMortal/News-2.0/assets/67017303/d75ef697-2697-4940-aefe-dae8ab51d4c3)

