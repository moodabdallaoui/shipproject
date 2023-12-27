using Microsoft.AspNetCore.Mvc;
using shipproject.Server.Controllers;
using shipproject.Server;
[Route("api/[controller]")]
[ApiController]
public class ShipApiController : ControllerBase
    {
    private readonly ShipRepository _shipRepository;

    public ShipApiController(ShipRepository shipRepository)
    {
        _shipRepository = shipRepository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Ship>> GetAllShips()
    {
        var ships = _shipRepository.GetAllShips();
        return Ok(ships);
    }

    [HttpGet("{id}")]
    public ActionResult<Ship> GetShipById(string id)
    {
        var ship = _shipRepository.GetShipById(id);
        if (ship == null)
        {
            return NotFound();
        }
        return Ok(ship);
    }

    [HttpPost]
    public IActionResult AddShip([FromBody] Ship ship)
    {
        _shipRepository.AddShip(ship);
        return CreatedAtAction(nameof(GetShipById), new { id = ship.Id }, ship);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateShip(string id, [FromBody] Ship ship)
    {
        _shipRepository.UpdateShip(ship);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteShip(string id)
    {
        _shipRepository.DeleteShip(id);
        return NoContent();
    }

}

