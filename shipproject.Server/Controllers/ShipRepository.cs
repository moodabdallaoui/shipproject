using Microsoft.VisualStudio.CodeCoverage;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace shipproject.Server.Controllers

{
    public class ShipRepository
    {
        private static List<Ship> ships = new List<Ship>
    {
        new Ship { Id = "1", Name = "Ship1", Length = 100, Width = 20, Code = "ABC123" },
        new Ship { Id = "2", Name = "Ship2", Length = 120, Width = 25, Code = "DEF456" }
    };

        public List<Ship> GetAllShips()
        {
            return ships;
        }

        public Ship GetShipById(string id)
        {
            return ships.Find(match: s => s.Id == id);
        }

        public void AddShip(Ship ship)
        {
            ships.Add(ship);
        }

        public void UpdateShip(Ship ship)
        {
            var existingShip = ships.Find(s => s.Id == ship.Id);
            if (existingShip != null)
            {
                existingShip.Name = ship.Name;
                existingShip.Length = ship.Length;
                existingShip.Width = ship.Width;
                existingShip.Code = ship.Code;
            }
        }

        public void DeleteShip(string id)
        {
            var ship = ships.Find(s => s.Id == id);
            if (ship != null)
            {
                ships.Remove(ship);
            }
        }

    }
}
