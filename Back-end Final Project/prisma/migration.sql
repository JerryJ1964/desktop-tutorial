CREATE TABLE `amenities` (
	`id` varchar(191) NOT NULL,
	`name` varchar(191) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `bookings` (
	`id` varchar(191) NOT NULL,
	`userId` varchar(191) NOT NULL,
	`propertyId` varchar(191) NOT NULL,
	`checkinDate` datetime(3) NOT NULL,
	`checkoutDate` datetime(3) NOT NULL,
	`numberOfGuests` int NOT NULL,
	`totalPrice` int NOT NULL,
	`bookingStatus` varchar(191) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `hosts` (
	`id` varchar(191) NOT NULL,
	`username` varchar(191) NOT NULL,
	`name` varchar(191) NOT NULL,
	`aboutMe` varchar(191) NOT NULL,
	`email` varchar(191) NOT NULL,
	`password` varchar(191) NOT NULL,
	`phoneNumber` varchar(191) NOT NULL,
	`profilePicture` varchar(191) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `properties` (
	`id` varchar(191) NOT NULL,
	`hostId` varchar(191) NOT NULL,
	`title` varchar(191) NOT NULL,
	`description` varchar(191) NOT NULL,
	`location` varchar(191) NOT NULL,
	`pricePerNight` decimal(65,30) NOT NULL,
	`bedroomCount` int NOT NULL,
	`bathRoomCount` int NOT NULL,
	`maxGuestCount` int NOT NULL,
	`rating` int NOT NULL,
	`userId` varchar(191) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY `properties_hostId_key` (`hostId`),
	KEY `properties_hostId_idx` (`hostId`),
	KEY `properties_userId_idx` (`userId`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `reviews` (
	`id` varchar(191) NOT NULL,
	`userId` varchar(191) NOT NULL,
	`propertyId` varchar(191) NOT NULL,
	`rating` int NOT NULL,
	`comment` varchar(191) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `users` (
	`id` varchar(191) NOT NULL,
	`username` varchar(191) NOT NULL,
	`password` varchar(191) NOT NULL,
	`name` varchar(191) NOT NULL,
	`email` varchar(191) NOT NULL,
	`phoneNumber` varchar(191) NOT NULL,
	`profilePicture` varchar(191) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY `users_username_key` (`username`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;