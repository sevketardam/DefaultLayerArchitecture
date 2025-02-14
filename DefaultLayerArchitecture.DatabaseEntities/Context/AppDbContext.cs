using Microsoft.EntityFrameworkCore;
using DefaultLayerArchitecture.DatabaseEntities.Entities;

namespace DefaultLayerArchitecture.DatabaseEntities.Context;

public sealed class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
        ChangeTracker.LazyLoadingEnabled = false;
        ChangeTracker.AutoDetectChangesEnabled = false;
        ChangeTracker.Context.Database.AutoSavepointsEnabled = false;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //modelBuilder.Entity<Default>()
        //    .HasOne(a => a.DefaultIdentity)
        //    .WithMany(a => a.DefaultList)
        //    .HasForeignKey(a => a.DefaultId)
        //    .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.Entity<Users>().HasData(
            new Users()
            {
                Id = Guid.Parse("4f272788-5533-42d0-984e-0ca00046c011"),
                Password = "",//
                UserName = "admin",
                UserType = "admin",
                CreatedDate = DateTime.Now,
            }
        );

        base.OnModelCreating(modelBuilder);
    }

    public DbSet<Users> Users { get; set; }

}
