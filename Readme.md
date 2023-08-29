<div align="center">
  <h1>DATASET OF IQBAL POETRY</h1>
  <img src="https://rekhta.pc.cdn.bitgravity.com/Images/Shayar/allama-iqbal.png" alt="Allama Iqbal" width="200" height="200" style="border-radius: 50%;" />
</div>

---

This project contains a dataset of poetry written by Allama Iqbal, a renowned philosopher, poet, and politician in British India. The dataset is organized into various lists and poems, providing valuable insights into Iqbal's literary contributions.

## About Allama Iqbal

Allama Iqbal (1877–1938) was a prominent philosopher, poet, and thinker in the Indian subcontinent. He is widely regarded as having played a crucial role in inspiring the Pakistan Movement through his poetry, advocating for self-discovery, unity, and revival of Islamic ideals.

## Project Structure

The project's structure is organized as follows:

- `Sorted JSON dataset`: Contains JSON files that represent the entire collection of poems and lists.

  - `allLists.json`: A JSON file containing a compilation of all the lists of poem titles.
  - `allPoems.json`: A JSON file containing all the poems in a single file.

- `lists`: A directory containing individual YAML files for different lists of poems.

  - `List_001.yaml`
  - `List_002.yaml`
  - ...

- `poems`: A directory containing subdirectories named by their respective numbers, each containing individual YAML files for poems.

  - `001`: Subdirectory for poems in list 001.
    - `001_001.yaml`
    - `001_002.yaml`
    - ...

  - `002`: Subdirectory for poems in list 002.
    - ...

- `.gitignore`: Specifies files and directories to ignore in version control.
- `converter.js`: A script to convert YAML files to JSON.
- `package-lock.json` and `package.json`: Node.js package configuration files.

## Usage

You can use the JSON files in the `Sorted JSON dataset` to access the complete dataset or fetch specific lists and poems. The `lists` and `poems` directories contain individual YAML files with metadata and content for each poem and list. The `converter.js` script can be used to convert these YAML files into JSON format.

## How to Contribute

Contributions to this dataset are welcome! If you have additional poems, lists, or corrections to existing data, feel free to contribute by creating pull requests.

## License

This dataset is provided under the [MIT License](LICENSE).
