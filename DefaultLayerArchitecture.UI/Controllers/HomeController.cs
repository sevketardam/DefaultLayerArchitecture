using Microsoft.AspNetCore.Mvc;

namespace DefaultLayerArchitecture.UI.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
