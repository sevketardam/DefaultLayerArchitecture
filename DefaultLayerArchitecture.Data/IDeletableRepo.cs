namespace DefaultLayerArchitecture.Data;

public interface IDeletableRepo<T> : IRepo<T> where T : class, IEntity
{
    void HardDelete(T deletedData);
    void SoftDelete(T deletedData);
    void HardDeleteByFunc(Func<T, bool> whereCondition);
}