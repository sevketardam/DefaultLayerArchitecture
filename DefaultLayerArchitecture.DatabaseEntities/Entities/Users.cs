using DefaultLayerArchitecture.Data;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DefaultLayerArchitecture.DatabaseEntities.Entities;

public class Users : IEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }
    public required string UserName { get; set; }
    public required string Password { get; set; }
    public required string UserType { get; set; }


    public DateTime CreatedDate { get; set; }
}