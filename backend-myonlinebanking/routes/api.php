<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Account\AccountController;

Route::prefix('accounts')->group(function () {
    Route::get('list', [AccountController::class, 'index'])->name('accounts.list');
    Route::post('create', [AccountController::class, 'store'])->name('accounts.create');
    Route::get('{id}/edit', [AccountController::class, 'edit'])->name('accounts.edit');
    Route::put('{id}', [AccountController::class, 'update'])->name('accounts.update');
    Route::delete('{id}', [AccountController::class, 'destroy'])->name('accounts.delete');
});

//Route::resource('accounts', 'Account\AccountController');
