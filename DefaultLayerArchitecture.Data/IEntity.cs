using System.ComponentModel.DataAnnotations;

namespace DefaultLayerArchitecture.Data;

public interface IEntity
{
    [Key]
    public Guid Id { get; set; }

    public DateTime CreatedDate { get; set; }
    public DateTime UpdatedDate { get; set; }
    public DateTime DeletedDate { get; set; }
}