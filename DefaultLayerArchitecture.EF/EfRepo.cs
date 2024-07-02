using Microsoft.EntityFrameworkCore;
using DefaultLayerArchitecture.Data;

namespace DefaultLayerArchitecture.EF;

public abstract class EfRepo<TContext, TEntity>(TContext context) :
    ISelectableRepo<TEntity>, ISelectableAsyncRepo<TEntity>,
    IEInsertableRepo<TEntity>, IInsertableAsyncRepo<TEntity>,
    IDeletableRepo<TEntity>,
    IUpdatetableRepo<TEntity>
    where TEntity : class, IEntity
    where TContext : DbContext
        
{
    public TEntity Insert(TEntity addedData)
    {
        context.Set<TEntity>().Add(addedData);
        context.SaveChanges();
        return addedData;
    }

    public async Task<TEntity> InsertAsync(TEntity addedData)
    {
        await context.Set<TEntity>().AddAsync(addedData);
        await context.SaveChangesAsync();
        return addedData;
    }

    public List<TEntity> InsertRage(List<TEntity> addedListData)
    {
        context.Set<TEntity>().AddRange(addedListData);
        context.SaveChanges();
        return addedListData;
    }

    public async Task InsertRangeAsync(List<TEntity> addedListData)
    {
        await context.Set<TEntity>().AddRangeAsync(addedListData);
        await context.SaveChangesAsync();
    }

    public void MySaveChanges()
    {
        context.SaveChanges();
    }

    public List<TEntity> Select()
    {
        return context.Set<TEntity>().ToList();
    }

    public async Task<List<TEntity>> SelectAsync()
    {
        return await context.Set<TEntity>().ToListAsync();
    }

    public async Task<TEntity> SelectByAsync(object id)
    {
        return await context.Set<TEntity>().FindAsync(id);
    }

    public List<TEntity> SelectByFunc(Func<TEntity, bool> whereCondition)
    {           
        return context.Set<TEntity>().Where(whereCondition).ToList();
    }

    public TEntity SelectById(object id)
    {
        return context.Set<TEntity>().Find(id);
    }

    public void HardDelete(TEntity deletedData)
    {
        context.Set<TEntity>().Remove(deletedData);
        context.SaveChanges();
    }

    public void SoftDelete(TEntity deletedData)
    {
        deletedData.GetType().GetProperty("IsDelete")?.SetValue(deletedData, true);
        this.Update(deletedData);
    }

    public TEntity Update(TEntity updatedData)
    {
        context.Set<TEntity>().Attach(updatedData);
        context.Entry(updatedData).State = EntityState.Modified;
        context.SaveChanges();
        return updatedData;
    }

    public void HardDeleteByFunc(Func<TEntity, bool> whereCondition)
    {
        var entitiesToDelete = context.Set<TEntity>().Where(whereCondition).ToList();

        foreach (var entity in entitiesToDelete)
        {
            context.Set<TEntity>().Remove(entity);
        }

        context.SaveChanges();
    }
}