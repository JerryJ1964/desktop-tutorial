CREATE TABLE `_BookingToProperty` (
	`A` varchar(191) NOT NULL,
	`B` varchar(191) NOT NULL,
	UNIQUE KEY `_BookingToProperty_AB_unique` (`A`, `B`),
	KEY `_BookingToProperty_B_index` (`B`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `_PropertyToamenity` (
	`A` varchar(191) NOT NULL,
	`B` varchar(191) NOT NULL,
	UNIQUE KEY `_PropertyToamenity_AB_unique` (`A`, `B`),
	KEY `_PropertyToamenity_B_index` (`B`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `_PropertyToReview` (
	`A` varchar(191) NOT NULL,
	`B` varchar(191) NOT NULL,
	UNIQUE KEY `_PropertyToReview_AB_unique` (`A`, `B`),
	KEY `_PropertyToReview_B_index` (`B`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `amenity` (
	`id` varchar(191) NOT NULL,
	`name` varchar(191) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Booking` (
	`id` varchar(191) NOT NULL,
	`userId` varchar(191) NOT NULL,
	`propertyId` varchar(191) NOT NULL,
	`checkinDate` datetime(3) NOT NULL,
	`checkoutDate` datetime(3) NOT NULL,
	`numberOfGuets` int NOT NULL,
	`totalPrice` int NOT NULL,
	`bookingStauts` varchar(191) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY `Booking_userId_key` (`userId`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Host` (
	`id` varchar(191) NOT NULL,
	`username` varchar(191) NOT NULL,
	`name` varchar(191) NOT NULL,
	`aboutMe` varchar(191) NOT NULL,
	`email` varchar(191) NOT NULL,
	`password` varchar(191) NOT NULL,
	`phoneNumber` varchar(191) NOT NULL,
	`profilePicture` varchar(191) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY `Host_username_key` (`username`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Property` (
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
	UNIQUE KEY `Property_hostId_key` (`hostId`),
	KEY `Property_hostId_idx` (`hostId`),
	KEY `Property_userId_idx` (`userId`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Review` (
	`id` varchar(191) NOT NULL,
	`userId` varchar(191) NOT NULL,
	`propertyId` varchar(191) NOT NULL,
	`rating` int NOT NULL,
	`comment` varchar(191) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY `Review_userId_key` (`userId`)
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
	UNIQUE KEY `User_username_key` (`username`)
) ENGINE InnoDB,
CHARSET utf8mb4,
COLLATE utf8mb4_unicode_ci;