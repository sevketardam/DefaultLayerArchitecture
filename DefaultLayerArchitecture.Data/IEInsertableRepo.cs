namespace DefaultLayerArchitecture.Data;

public  interface IEInsertableRepo<T> : IRepo<T> where T : class,IEntity
{
    T Insert(T addedData);
    List<T> InsertRage(List<T> addedListData);
}