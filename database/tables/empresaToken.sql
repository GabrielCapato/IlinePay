CREATE TABLE `empresatoken` (
  `idEmpresa` INT NOT NULL,
  `token` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idEmpresa`),
  CONSTRAINT `FK_EMPRESA_TOKEN`
    FOREIGN KEY (`idEmpresa`)
    REFERENCES `empresa` (`idEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
