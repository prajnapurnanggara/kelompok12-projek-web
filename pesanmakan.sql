-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2022 at 11:59 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pesanmakan`
--

-- --------------------------------------------------------

--
-- Table structure for table `keranjang`
--

CREATE TABLE `keranjang` (
  `id` int(5) NOT NULL,
  `makanan` varchar(50) NOT NULL,
  `harga` int(6) NOT NULL,
  `jumlah` int(3) NOT NULL,
  `catatan` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `makanan`
--

CREATE TABLE `makanan` (
  `id` int(5) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `deskripsi` varchar(500) NOT NULL,
  `hargaasli` int(6) NOT NULL,
  `hargapalsu` int(6) NOT NULL,
  `file` varchar(250) NOT NULL,
  `status` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `makanan`
--

INSERT INTO `makanan` (`id`, `nama`, `deskripsi`, `hargaasli`, `hargapalsu`, `file`, `status`) VALUES
(1, 'Rendang', 'Rendang adalah masakan daging sapi yang dihasilkan dari proses memasak suhu rendah dalam waktu lama menggunakan aneka rempah-rempah dan santan.', 20000, 25000, 'rendang.jpg', 'Best Seller'),
(2, 'Sate Ayam', 'Sate adalah makanan yang terbuat dari daging ayam yang dipotong kecil-kecil yang ditaburi dengan bumbu kacang dang kecap manis dan ditusuk dengan bambu, kemudian dipanggang menggunakan bara arang kayu.', 15000, 17500, 'sateayam.jpg', 'Tersedia'),
(3, 'Nasi Goreng', 'Nasi goreng adalah nasi yang digoreng dalam sebuah wajan atau penggorengan menghasilkan cita rasa berbeda karena dicampur dengan bumbu-bumbu seperti garam, bawang putih, bawang merah, merica, kecap manis, sayuran dan suwiran daging ayam.', 17000, 20000, 'nasigoreng.jpg', 'Tersedia'),
(4, 'Bakso Sapi', 'Bakso adalah jenis bola daging yang dibuat dari campuran daging sapi giling dan tepung tapioka, yang disajikan panas-panas dengan kuah kaldu sapi bening, dicampur mi, bihun, taoge, tahu, telur lalu ditaburi bawang goreng dan seledri', 15000, 17000, 'baksosapi.jpg', 'Tersedia'),
(5, 'Soto Ayam', 'Soto makanan seperti sop yang terbuat dari kaldu daging ayam dan sayuran yang dicampur dengan bumbu kuning, disajikan dengan mie, telur, seledri, bawang goreng dan suwiran ayam.', 15000, 17000, 'sotoayam.jpg', 'Habis');

-- --------------------------------------------------------

--
-- Table structure for table `makananpesanan`
--

CREATE TABLE `makananpesanan` (
  `idid` int(4) NOT NULL,
  `idpesanan` varchar(6) NOT NULL,
  `id` int(5) NOT NULL,
  `makanan` varchar(50) NOT NULL,
  `harga` int(6) NOT NULL,
  `jumlah` int(3) NOT NULL,
  `totalharga` int(6) NOT NULL,
  `catatan` varchar(250) NOT NULL,
  `total` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `makananpesanan`
--

INSERT INTO `makananpesanan` (`idid`, `idpesanan`, `id`, `makanan`, `harga`, `jumlah`, `totalharga`, `catatan`, `total`) VALUES
(1, '1', 1, 'Rendang', 20000, 2, 40000, 'pedas', 147000),
(2, '1', 2, 'Sate Ayam', 15000, 3, 45000, 'tidak pedas', 147000),
(3, '1', 3, 'Nasi Goreng', 17000, 1, 17000, 'jangan pakai sayur', 147000),
(4, '1', 5, 'Soto Ayam', 15000, 3, 45000, 'jangan pakai bawang goreng', 147000),
(5, '1', 1, 'Rendang', 20000, 2, 40000, 'tidak pedas', 147000),
(6, '2', 1, 'Rendang', 20000, 2, 40000, 'tidak pedas', 130000),
(7, '2', 2, 'Sate Ayam', 15000, 3, 45000, 'tidak pedas', 130000),
(8, '2', 5, 'Soto Ayam', 15000, 3, 45000, 'jangan pake perasan jeruk nipis ya', 130000),
(9, '3', 1, 'Rendang', 20000, 2, 40000, 'tidak pedas', 85000),
(10, '3', 2, 'Sate Ayam', 15000, 3, 45000, 'tidak pedas', 85000),
(11, '4', 1, 'Rendang', 20000, 1, 20000, '', 50000),
(12, '4', 2, 'Sate Ayam', 15000, 2, 30000, '', 50000),
(13, '5', 1, 'Rendang', 20000, 2, 40000, 'pedas', 40000);

-- --------------------------------------------------------

--
-- Table structure for table `pesanan`
--

CREATE TABLE `pesanan` (
  `idpesanan` int(4) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `nomeja` int(2) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pesanan`
--

INSERT INTO `pesanan` (`idpesanan`, `nama`, `nomeja`, `status`) VALUES
(1, 'Rudi', 1, 'Cancel'),
(2, 'Budi', 3, 'Selesai'),
(3, 'Doni', 8, 'Dipesan'),
(4, 'Ari', 6, 'Selesai'),
(5, 'Saya', 3, 'Cancel');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `keranjang`
--
ALTER TABLE `keranjang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `makanan`
--
ALTER TABLE `makanan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `makananpesanan`
--
ALTER TABLE `makananpesanan`
  ADD PRIMARY KEY (`idid`);

--
-- Indexes for table `pesanan`
--
ALTER TABLE `pesanan`
  ADD PRIMARY KEY (`idpesanan`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `makananpesanan`
--
ALTER TABLE `makananpesanan`
  MODIFY `idid` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
