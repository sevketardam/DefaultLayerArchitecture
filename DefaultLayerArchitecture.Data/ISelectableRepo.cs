namespace DefaultLayerArchitecture.Data;

public interface ISelectableRepo<T> : IRepo<T> where T : class,IEntity
{
    List<T> Select();
    T SelectById(object id);
    List<T> SelectByFunc(Func<T,bool> whereCondition);

}