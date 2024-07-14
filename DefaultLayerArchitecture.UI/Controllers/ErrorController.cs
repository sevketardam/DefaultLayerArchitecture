using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DefaultLayerArchitecture.UI.Controllers;

public class ErrorController : Controller
{
    [AllowAnonymous]
    [HttpGet("not-found")]
    public IActionResult Index()
    {
        return View();
    }
}
