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

        base.OnModelCreating(modelBuilder);
    }

    public DbSet<Users> Users { get; set; }

}
