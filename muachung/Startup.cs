using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(muachung.Startup))]
namespace muachung
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
