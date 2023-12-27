using Microsoft.VisualStudio.TestTools.UnitTesting;
using shipproject.Server.Controllers;

namespace shipproject.Server
{
    public class ShipRepositoryTests
    {
        private const string TestFilePath = "test_ships.txt";

        [TestMethod]
        public void GetAllShips_ShouldReturnEmptyList_WhenFileDoesNotExist()
        {

            var repository = new ShipRepository();

          
            List<Ship> ships = repository.GetAllShips();

            CollectionAssert.AreEqual(new List<Ship>(), ships);
        }
        //get test
        [TestMethod]
        public void GetAllShips_ShouldReturnShips_WhenFileExists()
        {
          
            File.WriteAllText(TestFilePath, "1,Ship1,100,20,ABC123\n2,Ship2,120,25,DEF456");
            var repository = new ShipRepository();

         
            List<Ship> ships = repository.GetAllShips();

        
            CollectionAssert.AreEqual(new List<Ship>
        {
            new Ship { Id = "su9VRBBe4tDSYS-Yd3KoJ", Name = "shipOne", Length = 10, Width = 20, Code = "ABC123" },
            new Ship { Id = "su9VRBBe4tDSYS", Name = "Ship2", Length = 120, Width = 25, Code = "DEF456" }
        }, ships);
        }
        //add test
        [TestMethod]
        public void AddShip_ShouldAddShipToFile()
        {
        
            var repository = new ShipRepository();
            var newShip = new Ship { Id = "3", Name = "Ship3", Length = 110, Width = 22, Code = "GHI789" };

      
            repository.AddShip(newShip);
            List<Ship> ships = repository.GetAllShips();

            CollectionAssert.Contains(ships, newShip);
        }
        //update test
        [TestMethod]
        public void UpdateShip_ShouldUpdateShipInFile()
        {
            File.WriteAllText(TestFilePath, "1,Ship1,100,20,ABC123\n2,Ship2,120,25,DEF456");
            var repository = new ShipRepository();
            var updatedShip = new Ship { Id = "1", Name = "UpdatedShip", Length = 150, Width = 30, Code = "XYZ789" };

         
            repository.UpdateShip(updatedShip);
            List<Ship> ships = repository.GetAllShips();

        
            CollectionAssert.Contains(ships, updatedShip);
            CollectionAssert.DoesNotContain(ships, new Ship { Id = "1", Name = "Ship1", Length = 100, Width = 20, Code = "ABC123" });
        }
        //delete test
        [TestMethod]
        public void DeleteShip_ShouldDeleteShipFromFile()
        {
          
            File.WriteAllText(TestFilePath, "1,Ship1,100,20,ABC123\n2,Ship2,120,25,DEF456");
            var repository = new ShipRepository();

        
            repository.DeleteShip("1");
            List<Ship> ships = repository.GetAllShips();

      
            CollectionAssert.DoesNotContain(ships, new Ship { Id = "1", Name = "Ship1", Length = 100, Width = 20, Code = "ABC123" });
        }
        // Cleanup test file after tests
        [TestCleanup]
        public void CleanUp()
        {
            
            if (File.Exists(TestFilePath))
            {
                File.Delete(TestFilePath);
            }
        }
    }
}
