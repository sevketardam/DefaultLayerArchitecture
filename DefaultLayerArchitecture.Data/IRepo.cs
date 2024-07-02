namespace DefaultLayerArchitecture.Data;

public interface IRepo<T> where T : class,IEntity
{
    void MySaveChanges();
}