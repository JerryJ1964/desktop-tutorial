CREATE TABLE `_BookingsToProperties` (
	`A` varchar(191) NOT NULL,
	`B` varchar(191) NOT NULL,
	UNIQUE KEY `_BookingsToProperties_AB_unique` (`A`, `B`),
	KEY `_BookingsToProperties_B_index` (`B`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `_BookingToProperties` (
	`A` varchar(191) NOT NULL,
	`B` varchar(191) NOT NULL,
	UNIQUE KEY `_BookingToProperties_AB_unique` (`A`, `B`),
	KEY `_BookingToProperties_B_index` (`B`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `_PropertiesToamenities` (
	`A` varchar(191) NOT NULL,
	`B` varchar(191) NOT NULL,
	UNIQUE KEY `_PropertiesToamenities_AB_unique` (`A`, `B`),
	KEY `_PropertiesToamenities_B_index` (`B`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `_PropertiesToReviews` (
	`A` varchar(191) NOT NULL,
	`B` varchar(191) NOT NULL,
	UNIQUE KEY `_PropertiesToReviews_AB_unique` (`A`, `B`),
	KEY `_PropertiesToReviews_B_index` (`B`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `amenities` (
	`id` varchar(191) NOT NULL,
	`name` varchar(191) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Bookings` (
	`id` varchar(191) NOT NULL,
	`userId` varchar(191) NOT NULL,
	`propertyId` varchar(191) NOT NULL,
	`checkinDate` datetime(3) NOT NULL,
	`checkoutDate` datetime(3) NOT NULL,
	`numberOfGuets` int NOT NULL,
	`totalPrice` int NOT NULL,
	`bookingStauts` varchar(191) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY `Bookings_userId_key` (`userId`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Hosts` (
	`id` varchar(191) NOT NULL,
	`username` varchar(191) NOT NULL,
	`name` varchar(191) NOT NULL,
	`aboutMe` varchar(191) NOT NULL,
	`email` varchar(191) NOT NULL,
	`password` varchar(191) NOT NULL,
	`phoneNumber` varchar(191) NOT NULL,
	`profilePicture` varchar(191) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY `Hosts_username_key` (`username`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Properties` (
	`id` varchar(191) NOT NULL,
	`hostId` varchar(191) NOT NULL,
	`title` varchar(191) NOT NULL,
	`description` varchar(191) NOT NULL,
	`location` varchar(191) NOT NULL,
	`pricePerNight` decimal(65,30) NOT NULL,
	`bedroomCount` int NOT NULL,
	`bathroomCount` int NOT NULL,
	`maxGuestsCount` int NOT NULL,
	`rating` int NOT NULL,
	`userId` varchar(191) NOT NULL,
	`propertyId` varchar(191) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY `Properties_hostId_key` (`hostId`),
	KEY `Properties_hostId_idx` (`hostId`),
	KEY `Properties_userId_idx` (`userId`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Reviews` (
	`id` varchar(191) NOT NULL,
	`userId` varchar(191) NOT NULL,
	`propertyId` varchar(191) NOT NULL,
	`rating` int NOT NULL,
	`comment` varchar(191) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Users` (
	`id` varchar(191) NOT NULL,
	`username` varchar(191) NOT NULL,
	`password` varchar(191) NOT NULL,
	`name` varchar(191) NOT NULL,
	`email` varchar(191) NOT NULL,
	`phoneNumber` varchar(191) NOT NULL,
	`profilePicture` varchar(191) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY `Users_username_key` (`username`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;