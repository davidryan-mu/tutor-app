-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2019 at 05:36 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment4`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `a` varchar(10) DEFAULT NULL,
  `i` varchar(10) DEFAULT NULL,
  `u` varchar(10) DEFAULT NULL,
  `e` varchar(10) DEFAULT NULL,
  `o` varchar(10) DEFAULT NULL,
  `ka` varchar(10) DEFAULT NULL,
  `ki` varchar(10) DEFAULT NULL,
  `ku` varchar(10) DEFAULT NULL,
  `ke` varchar(10) DEFAULT NULL,
  `ko` varchar(10) DEFAULT NULL,
  `sa` varchar(10) DEFAULT NULL,
  `shi` varchar(10) DEFAULT NULL,
  `su` varchar(10) DEFAULT NULL,
  `se` varchar(10) DEFAULT NULL,
  `so` varchar(10) DEFAULT NULL,
  `ta` varchar(10) DEFAULT NULL,
  `chi` varchar(10) DEFAULT NULL,
  `tsu` varchar(10) DEFAULT NULL,
  `te` varchar(10) DEFAULT NULL,
  `to` varchar(10) DEFAULT NULL,
  `na` varchar(10) DEFAULT NULL,
  `ni` varchar(10) DEFAULT NULL,
  `nu` varchar(10) DEFAULT NULL,
  `ne` varchar(10) DEFAULT NULL,
  `no` varchar(10) DEFAULT NULL,
  `ha` varchar(10) DEFAULT NULL,
  `hi` varchar(10) DEFAULT NULL,
  `fu` varchar(10) DEFAULT NULL,
  `he` varchar(10) DEFAULT NULL,
  `ho` varchar(10) DEFAULT NULL,
  `ma` varchar(10) DEFAULT NULL,
  `mi` varchar(10) DEFAULT NULL,
  `mu` varchar(10) DEFAULT NULL,
  `me` varchar(10) DEFAULT NULL,
  `mo` varchar(10) DEFAULT NULL,
  `ya` varchar(10) DEFAULT NULL,
  `yu` varchar(10) DEFAULT NULL,
  `yo` varchar(10) DEFAULT NULL,
  `ra` varchar(10) DEFAULT NULL,
  `ri` varchar(10) DEFAULT NULL,
  `ru` varchar(10) DEFAULT NULL,
  `re` varchar(10) DEFAULT NULL,
  `ro` varchar(10) DEFAULT NULL,
  `wa` varchar(10) DEFAULT NULL,
  `wo` varchar(10) DEFAULT NULL,
  `n` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `a`, `i`, `u`, `e`, `o`, `ka`, `ki`, `ku`, `ke`, `ko`, `sa`, `shi`, `su`, `se`, `so`, `ta`, `chi`, `tsu`, `te`, `to`, `na`, `ni`, `nu`, `ne`, `no`, `ha`, `hi`, `fu`, `he`, `ho`, `ma`, `mi`, `mu`, `me`, `mo`, `ya`, `yu`, `yo`, `ra`, `ri`, `ru`, `re`, `ro`, `wa`, `wo`, `n`) VALUES
(3, 'david123', 'password', NULL, 'learned', 'learned', 'learned', 'learned', NULL, NULL, NULL, NULL, NULL, 'learned', 'learned', 'learned', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'learned', 'learned', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, '1', '1', 'learned', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'user', 'user', 'Learned', 'Learned', 'Learned', 'Learned', 'Learned', 'Learned', 'Learned', 'Learned', 'Learned', NULL, NULL, 'Learned', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
