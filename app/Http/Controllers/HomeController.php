<?php

namespace App\Http\Controllers;

use App\Mail\MailNotify;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class HomeController extends Controller
{
    private string $email = 'simonedode10@gmail.com';

    public function __invoke()
    {
        Inertia::share('locale', app()->getLocale());
        return inertia('App');
    }

    public function sendEmail(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => 'email|required|string',
            'subject' => 'required|string',
            'body' => 'required|string'
        ]);

        Mail::to($this->email)->send(new MailNotify($request->all()));

        return to_route("home");
    }
}
