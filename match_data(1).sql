-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2025 at 09:40 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

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
(1523, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaTdZs7gGPKnNfRgKQZ7b2bUDBgYAgmwdIw&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ796kdGjhEu_614g2UZMjb_eUzsbgHT_Jlsw&s', 'Perth Women', 'Hobart Women', 'PT-W', 'HB-W', '₹10 Crores', '₹80 Lakhs', 10000, 250, '2025-01-28 16:00:00'),
(1524, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaTdZs7gGPKnNfRgKQZ7b2bUDBgYAgmwdIw&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ796kdGjhEu_614g2UZMjb_eUzsbgHT_Jlsw&s', 'Brisbane Heat Women', 'Sydney Thunder Women', 'BH-W', 'ST-W', '₹20 Crores', '₹2 Crore', 10000, 250, '2025-01-30 18:30:00'),
(1525, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaTdZs7gGPKnNfRgKQZ7b2bUDBgYAgmwdIw&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ796kdGjhEu_614g2UZMjb_eUzsbgHT_Jlsw&s', 'Melbourne Renegades Women', 'Adelaide Strikers Women', 'MR-W', 'AS-W', '₹18 Crores', '₹1.8 Crore', 10000, 250, '2025-01-29 12:00:00');

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
('dda1a440d0e5463b', 'test@123', 'test123', 800);

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
