<div align="center">

# Chamal1120's Personal Site

</div>

My attempt at creating a minimal, fast and responsive personal site.

## Stack

- [Next.js v16](https://nextjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [Motion One](https://motion.dev)
- [Remarkjs](https://github.com/remarkjs/remark)
- [fontawesome icons](https://fontawesome.com)

## Credits

- [Vague colorscheme](https://github.com/vague-theme)
- [Dev.to](https://dev.to)
- [Vercel](https://vercel.com)

## Dev.to cache

Dev.to article lists and article details are cached by Next.js for seven days.
Set these environment variables locally and in Vercel:

```env
DEVTO_USERNAME=<your-username>
DEVTO_REVALIDATE_SECRET=<your-crazy-secret-string>
```

If `DEVTO_REVALIDATE_SECRET` is not set, the endpoint falls back to Vercel's
`CRON_SECRET` environment variable.

After publishing or updating an article, refresh the cache manually:

```sh
curl -X POST https://your-domain.example/api/devto/revalidate \
  -H "Authorization: Bearer $DEVTO_REVALIDATE_SECRET"
```

The next blog request will fetch fresh data from dev.to and cache it again.

## License

MIT [Licensed](LICENSE).
