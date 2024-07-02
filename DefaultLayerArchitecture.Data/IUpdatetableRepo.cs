namespace DefaultLayerArchitecture.Data;

public interface IUpdatetableRepo<T> : IRepo<T> where T : class,IEntity
{
    T Update(T updatedData);
}