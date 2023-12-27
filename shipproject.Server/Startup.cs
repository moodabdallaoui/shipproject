using Microsoft.AspNetCore.Builder;
using shipproject.Server.Controllers;

namespace shipproject.Server
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<ShipRepository>();
            services.AddControllers();
        }
    }
}
