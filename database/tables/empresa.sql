CREATE TABLE `empresa` (
  `idEmpresa` INT NOT NULL,
  `nomeFantasia` VARCHAR(100) NOT NULL,
  `razaoSocial` VARCHAR(100) NOT NULL,
  `cnpj` VARCHAR(14) NOT NULL,
  `situacao` INT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`idEmpresa`));
