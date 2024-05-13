CREATE TABLE `Book` (
	`id` varchar(191) NOT NULL,
	`title` varchar(191) NOT NULL,
	`author` varchar(191) NOT NULL,
	`isbn` varchar(191) NOT NULL,
	`pages` int NOT NULL,
	`available` tinyint(1) NOT NULL,
	`genre` varchar(191) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Order` (
	`id` varchar(191) NOT NULL,
	`order_type` enum('BOOK', 'RECORD', 'USER') NOT NULL,
	`book_id` varchar(191),
	`record_id` varchar(191),
	`user_id` varchar(191) NOT NULL,
	`order_date` datetime(3) NOT NULL,
	`delivery_date` datetime(3),
	`payment_method` varchar(191) NOT NULL,
	`comment` varchar(191),
	PRIMARY KEY (`id`),
	KEY `Order_book_id_idx` (`book_id`),
	KEY `Order_record_id_idx` (`record_id`),
	KEY `Order_user_id_idx` (`user_id`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Record` (
	`id` varchar(191) NOT NULL,
	`title` varchar(191) NOT NULL,
	`artist` varchar(191) NOT NULL,
	`year` int NOT NULL,
	`available` tinyint(1) NOT NULL,
	`genre` varchar(191) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `User` (
	`id` varchar(191) NOT NULL,
	`username` varchar(191) NOT NULL,
	`password` varchar(191) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY `User_username_key` (`username`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;