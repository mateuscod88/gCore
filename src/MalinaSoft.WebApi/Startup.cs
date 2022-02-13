using GaragePersistent.Context;
using GarageServices.BrandServices.Implementation;
using GarageServices.BrandServices.Interface;
using GarageServices.CarServices.Implementation;
using GarageServices.CarServices.Interface;
using GarageServices.EngineServices.Implementation;
using GarageServices.EngineServices.Interface;
using GarageServices.ModelServices.Implementation;
using GarageServices.ModelServices.Interface;
using GarageServices.OwnerServices.Implementation;
using GarageServices.OwnerServices.Interface;
using GarageServices.RepairService.Implementation;
using GarageServices.RepairService.Interface;
using MalinaSoft.GarageRepairRegistrator.Interfaces.Repositories;
using MalinaSoft.GarageRepairRegistrator.Persistance.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace GarazMechanicCore
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            var connectionString = Configuration.GetSection("ConnectionString:GarageContext");
            services.AddDbContext<GarageContext>(options => options.UseSqlServer(connectionString.Value, builder => builder.UseRowNumberForPaging()));

            services.AddTransient<ICarService,CarService>();
            services.AddTransient<ICarRepository, CarRepositoryEF>();
            services.AddTransient<IRepairRepository, RepairRepositoryEF>();

            services.AddTransient<IRepairService, RepairService>();
            services.AddTransient<IOwnerService, OwnerService>();
            services.AddTransient<ICarModelService, CarModelService>();
            services.AddTransient<IEngineService, EngineService>();
            services.AddTransient<IBrandService, BrandService>();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            //app.UseCors(MyAllowSpecificOrigins);
            //app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            
            app.UseMvc(routes =>
            {
                //routes.MapRoute(
                //    name: "default",
                //    template: "{controller}/{action=Index}/{id?}");
                
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
