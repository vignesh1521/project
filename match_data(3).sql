-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 03, 2025 at 02:01 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `match_data`
--

-- --------------------------------------------------------

--
-- Table structure for table `contest`
--

CREATE TABLE `contest` (
  `match_id` int(255) NOT NULL,
  `contest_id` varchar(255) NOT NULL,
  `prize_pool` int(255) NOT NULL,
  `entry_fee` int(255) NOT NULL,
  `total_spots` int(255) NOT NULL,
  `spots_available` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contest`
--

INSERT INTO `contest` (`match_id`, `contest_id`, `prize_pool`, `entry_fee`, `total_spots`, `spots_available`) VALUES
(1521, '1', 100, 10, 12, 8),
(1521, '2', 200, 20, 15, 12),
(1521, '3', 150, 15, 10, 7),
(1521, '4', 300, 30, 20, 17),
(1521, '5', 500, 50, 25, 22),
(1521, '6', 50, 5, 8, 6),
(1521, '7', 750, 75, 30, 27),
(1521, '8', 1000, 100, 40, 38),
(1521, '9', 1200, 120, 50, 48),
(1521, '10', 250, 25, 18, 17);

-- --------------------------------------------------------

--
-- Table structure for table `matches`
--

CREATE TABLE `matches` (
  `match_id` int(11) NOT NULL,
  `team1_img` varchar(255) NOT NULL,
  `team2_img` varchar(255) NOT NULL,
  `team1_name` varchar(100) NOT NULL,
  `team2_name` varchar(100) NOT NULL,
  `team1_nick` varchar(50) NOT NULL,
  `team2_nick` varchar(50) NOT NULL,
  `prize_pool` varchar(50) NOT NULL,
  `max_prize` varchar(50) NOT NULL,
  `spots` bigint(255) NOT NULL,
  `spots_filled` bigint(255) NOT NULL,
  `time` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `matches`
--

INSERT INTO `matches` (`match_id`, `team1_img`, `team2_img`, `team1_name`, `team2_name`, `team1_nick`, `team2_nick`, `prize_pool`, `max_prize`, `spots`, `spots_filled`, `time`) VALUES
(1521, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaTdZs7gGPKnNfRgKQZ7b2bUDBgYAgmwdIw&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ796kdGjhEu_614g2UZMjb_eUzsbgHT_Jlsw&s', 'Perth Women', 'Hobart Women', 'PT-W', 'HB-W', '₹10 Crores', '₹80 Lakhs', 10000, 250, '2025-2-5 16:00:00'),
(1524, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaTdZs7gGPKnNfRgKQZ7b2bUDBgYAgmwdIw&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ796kdGjhEu_614g2UZMjb_eUzsbgHT_Jlsw&s', 'Brisbane Heat Women', 'Sydney Thunder Women', 'BH-W', 'ST-W', '₹20 Crores', '₹2 Crore', 10000, 250, '2025-01-30 18:30:00'),
(1525, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaTdZs7gGPKnNfRgKQZ7b2bUDBgYAgmwdIw&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ796kdGjhEu_614g2UZMjb_eUzsbgHT_Jlsw&s', 'Melbourne Renegades Women', 'Adelaide Strikers Women', 'MR-W', 'AS-W', '₹18 Crores', '₹1.8 Crore', 10000, 250, '2025-01-29 12:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `prize_details`
--

CREATE TABLE `prize_details` (
  `match_id` int(255) NOT NULL,
  `contest_id` int(255) NOT NULL,
  `stage1` varchar(255) DEFAULT NULL,
  `stage2` varchar(255) DEFAULT NULL,
  `stage3` varchar(255) DEFAULT NULL,
  `stage4` varchar(255) DEFAULT NULL,
  `stage5` varchar(255) DEFAULT NULL,
  `stage6` varchar(255) DEFAULT NULL,
  `stage7` varchar(255) DEFAULT NULL,
  `stage8` varchar(255) DEFAULT NULL,
  `stage9` varchar(255) DEFAULT NULL,
  `stage10` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prize_details`
--

INSERT INTO `prize_details` (`match_id`, `contest_id`, `stage1`, `stage2`, `stage3`, `stage4`, `stage5`, `stage6`, `stage7`, `stage8`, `stage9`, `stage10`) VALUES
(1521, 1, '1:25', '2:15', '3-8:10', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1521, 2, '1:60', '2:40', '3:25', '4-8:15', NULL, NULL, NULL, NULL, NULL, NULL),
(1521, 3, '1:60', '2:40', '3-7:10', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1521, 4, '1:100', '2:50', '3-5:30', '6-7:12', '8-10:5', NULL, NULL, NULL, NULL, NULL),
(1521, 5, '1:400', '2:200', '3:100', '4-10:50', NULL, NULL, NULL, NULL, NULL, NULL),
(1521, 6, '1:30', '2:20', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1521, 7, '1:400', '2:200', '3:100', '4-10:50', NULL, NULL, NULL, NULL, NULL, NULL),
(1521, 8, '1:250', '2:100', '3-5:25', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1521, 9, '1:100', '2:200', '3:100', '4-10:50', NULL, NULL, NULL, NULL, NULL, NULL),
(1521, 10, '1:1000', '2:200', '3:100', '4-10:50', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `registered_contest`
--

CREATE TABLE `registered_contest` (
  `user_id` varchar(255) NOT NULL,
  `match_id` int(255) NOT NULL,
  `contest_id` int(255) NOT NULL,
  `entry_fee` int(255) NOT NULL,
  `reg_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registered_contest`
--

INSERT INTO `registered_contest` (`user_id`, `match_id`, `contest_id`, `entry_fee`, `reg_time`) VALUES
('dda1a440d0e5463b', 1521, 1, 10, '2025-02-03 00:48:24');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `user_id` varchar(255) NOT NULL,
  `mail_id` varchar(255) NOT NULL,
  `user_token` varchar(255) NOT NULL,
  `funds` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`user_id`, `mail_id`, `user_token`, `funds`) VALUES
('dda1a440d0e5463b', 'test@123', 'test123', 98915);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `matches`
--
ALTER TABLE `matches`
  ADD PRIMARY KEY (`match_id`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`mail_id`),
  ADD UNIQUE KEY `user_id` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
