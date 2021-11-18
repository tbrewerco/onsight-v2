-- create users table
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `given_name` varchar(255) NOT NULL,
  `family_name` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profile_photo_url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `profile_photo_url` (`profile_photo_url`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- create gyms table
CREATE TABLE `gyms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address_street` varchar(255) NOT NULL,
  `address_city` varchar(255) NOT NULL,
  `address_state` varchar(255) NOT NULL,
  `address_zip` varchar(255) NOT NULL,
  `address_coordinates` point DEFAULT NULL,
  `has_boulders` enum('yes','no') NOT NULL,
  `has_sport_routes` enum('yes','no') NOT NULL,
  `has_auto_belays` enum('yes','no') NOT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `photo_url` (`photo_url`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `gyms_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- create climbing_routes table
CREATE TABLE `climbing_routes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_top_rope` enum('yes','no') NOT NULL,
  `is_auto_belay` enum('yes','no') NOT NULL,
  `is_lead_climb` enum('yes','no') NOT NULL,
  `is_boulder` enum('yes','no') NOT NULL,
  `hold_color` varchar(255) NOT NULL,
  `setter_grade` int DEFAULT NULL,
  `setter_id` int DEFAULT NULL,
  `gym_id` int DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `image_url` (`image_url`),
  KEY `setter_id` (`setter_id`),
  KEY `gym_id` (`gym_id`),
  CONSTRAINT `climbing_routes_ibfk_1` FOREIGN KEY (`setter_id`) REFERENCES `users` (`id`),
  CONSTRAINT `climbing_routes_ibfk_2` FOREIGN KEY (`gym_id`) REFERENCES `gyms` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `gym_wall_sections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `gym_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `gym_id` (`gym_id`),
  CONSTRAINT `gym_wall_sections_ibfk_1` FOREIGN KEY (`gym_id`) REFERENCES `gyms` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;