using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MalinaSoft.ApiIdentityTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AuthController : Controller
    {
        [HttpGet]
        public IActionResult FakeData()
        {
            var users = new List<User>
            {
                new User
                {
                    Id = 1,
                    FullName = "Mateo Malina1",
                    Email = "mm1@m.pl"
                },
                new User
                {
                    Id = 2,
                    FullName = "Mateo Malina2",
                    Email = "mm2@m.pl"
                },
                new User
                {
                    Id = 3,
                    FullName = "Mateo Malina3",
                    Email = "mm3@m.pl"
                }
            };
            return Json(users);
        }
    }
}
