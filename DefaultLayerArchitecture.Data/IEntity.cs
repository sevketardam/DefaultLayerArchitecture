using System.ComponentModel.DataAnnotations;

namespace DefaultLayerArchitecture.Data;

public interface IEntity
{
    [Key]
    public Guid Id { get; set; }

    public DateTime CreatedDate { get; set; }
}