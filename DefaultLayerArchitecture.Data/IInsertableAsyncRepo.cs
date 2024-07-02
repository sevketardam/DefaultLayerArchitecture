namespace DefaultLayerArchitecture.Data;

public interface IInsertableAsyncRepo<T> : IRepo<T> where T : class, IEntity
{
    Task<T> InsertAsync(T addedData);
    Task InsertRangeAsync(List<T> addedListData);
}