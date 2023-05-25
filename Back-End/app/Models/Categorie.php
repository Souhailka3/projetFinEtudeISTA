<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    // use HasFactory; // uncomment this if you are using Laravel 8 or higher
    protected $table = 'categories'; // change this to match your table name
    protected $primaryKey = 'id_categorie'; // change this to match your primary key name

    public function produits()
    {
        return $this->hasMany(Produit::class, 'id_categorie'); // change this to match your foreign key name
    }
}
