-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07-Fev-2022 às 00:55
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cronos`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `post` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `post`
--

INSERT INTO `post` (`id`, `post`, `description`) VALUES
(1, 'New Post', 'Lançamento do Site Cronos'),
(2, 'New Post', 'Nova plataforma de design gráfico'),
(3, 'New Post', 'Vida de Programador'),
(4, 'New Post', 'Um minuto para o café, é muito importante'),
(5, 'New Post', 'Novo Curso de UX Designer'),
(6, 'New Post', 'Invação do site'),
(7, 'New Post', 'Nossa visão para o mercado de TI'),
(8, 'New Post', 'Novos desafios');

-- --------------------------------------------------------

--
-- Estrutura da tabela `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `service`
--

INSERT INTO `service` (`id`, `name`, `description`) VALUES
(1, 'Analista de Sistemas', 'Analista de Sistemas'),
(2, 'Designer', 'Designer'),
(3, 'UX Designer', 'UX Designer'),
(4, 'DBA', 'DBA'),
(5, 'PO', 'Product Owner'),
(6, 'Programador', 'Programador'),
(7, 'Marketing', 'Marketing'),
(8, 'Marketing Place', 'Marketing Place');

-- --------------------------------------------------------

--
-- Estrutura da tabela `teammember`
--

CREATE TABLE `teammember` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `team` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `teammember`
--

INSERT INTO `teammember` (`id`, `name`, `team`) VALUES
(1, 'André', 'Marketing'),
(2, 'João', 'Marketing'),
(3, 'Maria', 'Informatica'),
(4, 'Lucas', 'Designer'),
(5, 'Erika', 'Programadora'),
(6, 'Marta', 'DBA');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `teammember`
--
ALTER TABLE `teammember`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `teammember`
--
ALTER TABLE `teammember`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
