namespace DefaultLayerArchitecture.Data;

public interface ISelectableAsyncRepo<T> : IRepo<T> where T : class,IEntity
{
    Task<List<T>> SelectAsync();
    Task<T> SelectByAsync(object id);
}